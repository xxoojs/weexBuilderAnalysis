import loaderUtils from 'loader-utils'

import {
  extractBlocks
} from './parser'
import {
  splitSourceLine,
  generateMap,
  consumeMap
  // printSourceWithLine
} from './util'

module.exports = function (source, inputSourceMap) {
  this.cacheable && this.cacheable()

  const callback = this.async()
  const loaderQuery = loaderUtils.getOptions(this)
  const type = loaderQuery.type
  let index = loaderQuery.index

  if (index != null && index.match(/^\d+$/)) {
    index = parseInt(index)
  }

  extractBlocks(source, type)
    .then(result => {
      if (index != null) {
        result = result[index]
      }
      const content = result.content.trim()

      let map
      if (this.sourceMap &&
        (type === 'scripts' || type === 'elements')) {
        const contentLineStart = result.line
        // let contentLineCount = 0

        let cmap
        if (inputSourceMap) {
          cmap = consumeMap(this, source, inputSourceMap)
          source = cmap.sourcesContent.join('')
          // printSourceWithLine(source)
        }

        const iterator = splitSourceLine(content)
          .map((input, line) => {
            // contentLineCount++
            line = line + 1
            let originalLine = line + contentLineStart
            const generatedLine = line
            if (cmap) {
              // mapping to the original of input source
              originalLine = cmap.mapping[`line-${originalLine}-column-0`].line
              // console.log(originalLine + ':', input)
            }
            return {
              original: {
                line: originalLine,
                column: 0
              },
              generated: {
                line: generatedLine,
                column: 0
              }
            }
          })

        // if (type === 'scripts') {
        //   let lineStart = contentLineStart
        //   if (cmap) {
        //     // mapping to the original of input source
        //     lineStart = cmap.mapping[`line-${lineStart}-column-0`].line
        //   }
        //   source = splitSourceLine(source)
        //     .map((input, line) => {
        //       line = line + 1
        //       // console.log(line + ':', input)
        //       if (line === lineStart
        //           || line === lineStart + contentLineCount + 1) {
        //         return input + ' /* generated by weex-loader */'
        //       } else {
        //         return input
        //       }
        //     }).join('\n')
        // }

        map = generateMap(this, source, iterator)
      }

      return [content, map]
    }).then(([content, map]) => {
      callback(null, content, map && map.toJSON() || inputSourceMap)
    }).catch(e => {
      callback(e, '')
    })
}
