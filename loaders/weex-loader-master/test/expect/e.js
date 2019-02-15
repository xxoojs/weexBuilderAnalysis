{
  "@weex-component/hi": {
    "data": "function data() {\n\t        return {\n\t            hi: ''\n\t        };\n\t    }",
    "template": {
      "type": "div",
      "children": [
        {
          "type": "text",
          "classList": [
            "hi"
          ],
          "attr": {
            "value": "function () {return this.hi}"
          }
        }
      ]
    },
    "style": {
      "hi": {
        "fontSize": 26,
        "color": "#008000"
      }
    }
  },
  "@weex-component/name": {
    "data": "function data() {\n\t        return {\n\t            name: ''\n\t        };\n\t    }",
    "template": {
      "type": "div",
      "children": [
        {
          "type": "text",
          "classList": [
            "name"
          ],
          "attr": {
            "value": "function () {return this.name}"
          }
        }
      ]
    },
    "style": {
      "name": {
        "fontSize": 26,
        "color": "#FF0000"
      }
    }
  },
  "@weex-component/3f7bb5c2b95329dedd5cb4556f4df361": {
    "data": "function data() {\n\t    return {\n\t        hi: 'Hello',\n\t        name: 'Weex'\n\t    };\n\t}",
    "template": {
      "type": "div",
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "type": "hi",
          "attr": {
            "hi": "function () {return this.hi}"
          }
        },
        {
          "type": "name",
          "attr": {
            "name": "function () {return this.name}"
          }
        }
      ]
    }
  }
}