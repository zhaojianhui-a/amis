amis.define('docs/zh-CN/components/form/input-range.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputRange 滑块",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputRange 范围",
    "icon": null,
    "order": 38,
    "html": "<div class=\"markdown-body\"><p>可以用于选择单个数值或数值范围。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>默认是单个数值，结果是个整数。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"label\": '滑块',\n            \"name\": 'range',\n            \"value\": 20\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4\" href=\"#%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选择范围</h2><p>对于范围的渲染，结果将是个字符串，两个数值通过分隔符来隔开。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"label\": \"range\",\n            \"multiple\": true,\n            \"joinValues\": false,\n            \"value\": {\n                \"min\": 10,\n                \"max\": 50\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8E%A7%E5%88%B6%E8%B0%83%E6%95%B4%E7%9A%84%E7%B2%92%E5%BA%A6\" href=\"#%E6%8E%A7%E5%88%B6%E8%B0%83%E6%95%B4%E7%9A%84%E7%B2%92%E5%BA%A6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>控制调整的粒度</h2><p>使用 <code>step</code> 可以控制调整粒度，默认是 1。<code>3.3.0</code>版本后支持使用变量。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"min\": 0,\n            \"max\": 1,\n            \"step\": 0.01,\n            \"label\": \"range\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%A6%81%E7%94%A8\" href=\"#%E7%A6%81%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>禁用</h2><p>使用<code>disabled</code>禁用滑块。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"label\": '滑块',\n            \"name\": 'range',\n            \"value\": 10,\n            \"disabled\": true,\n            \"showInput\": true,\n            \"clearable\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%AD%A5%E9%95%BF\" href=\"#%E6%98%BE%E7%A4%BA%E6%AD%A5%E9%95%BF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示步长</h2><p>开启<code>showSteps</code>可显示每个<code>step</code>长度</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"label\": '滑块',\n            \"name\": 'range',\n            \"max\": 10,\n            \"showSteps\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%88%86%E5%89%B2%E5%9D%97%E6%95%B0\" href=\"#%E5%88%86%E5%89%B2%E5%9D%97%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>分割块数</h2><p>通过<code>parts</code>可对整个滑动条平均分为<code>parts</code>块。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"label\": '滑块',\n            \"name\": 'range',\n            \"showSteps\": true,\n            \"parts\": 20\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%88%BB%E5%BA%A6%E6%A0%87%E8%AE%B0\" href=\"#%E5%88%BB%E5%BA%A6%E6%A0%87%E8%AE%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>刻度标记</h2><p>通过<code>marks</code>可对刻度进行自定义。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"label\": '滑块',\n            \"name\": 'range',\n            \"parts\": 5,\n            \"marks\": {\n                '0': '0',\n                '20%': '20Mbps',\n                '40%': '40Mbps',\n                '60%': '60Mbps',\n                '80%': '80Mbps',\n                '100': '100'\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%BE%93%E5%85%A5%E6%A1%86\" href=\"#%E8%BE%93%E5%85%A5%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>输入框</h2><p>通过开启<code>showInput</code>会展示输入框，输入框数据于滑块数据同步。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"label\": \"range\",\n            \"value\": 20,\n            \"showInput\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"label\": \"range\",\n            \"multiple\": true,\n            \"value\": [10, 20],\n            \"showInput\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%B8%85%E9%99%A4%E8%BE%93%E5%85%A5\" href=\"#%E6%B8%85%E9%99%A4%E8%BE%93%E5%85%A5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>清除输入</h2><p>在打开<code>showInput</code>输入框的前提下，开启<code>clearable</code>可对数据进行清除。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"label\": \"range\",\n            \"value\": 20,\n            \"showInput\": true,\n            \"clearable\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%A0%87%E7%AD%BE\" href=\"#%E6%98%BE%E7%A4%BA%E6%A0%87%E7%AD%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示标签</h2><p>标签默认在 hover 和拖拽过程中展示，通过<code>tooltipVisible</code>或者<code>tipFormatter</code>可指定标签是否展示。标签默认展示在滑块上方，通过<code>tooltipPlacement</code>可指定标签展示的位置。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"name\": \"range\",\n            \"label\": \"range\",\n            \"value\": 20,\n            \"tooltipVisible\": true,\n            \"tooltipPlacement\": \"right\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%AD%98%E6%88%90%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%AE%B5\" href=\"#%E5%AD%98%E6%88%90%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%AE%B5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>存成两个字段</h2><p>默认滑块多选存储一个字段，用 <code>delemiter</code> 分割，如果配置 <code>extraName</code> 则会存两个字段。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-range\",\n            \"multiple\": true,\n            \"name\": \"begin\",\n            \"extraName\": \"end\",\n            \"label\": \"range\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>css 类名</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td><code>number</code> or <code>string</code> or <code>{min: number, max: number}</code> or <code>[number, number]</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td><code>number | string</code></td>\n<td><code>0</code></td>\n<td>最小值，支持变量</td>\n<td><code>3.3.0</code>后支持变量</td>\n</tr>\n<tr>\n<td>max</td>\n<td><code>number | string</code></td>\n<td><code>100</code></td>\n<td>最大， 支持变量值</td>\n<td><code>3.3.0</code>后支持变量</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否禁用</td>\n<td></td>\n</tr>\n<tr>\n<td>step</td>\n<td><code>number | string</code></td>\n<td><code>1</code></td>\n<td>步长，支持变量</td>\n<td><code>3.3.0</code>后支持变量</td>\n</tr>\n<tr>\n<td>showSteps</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示步长</td>\n<td></td>\n</tr>\n<tr>\n<td>parts</td>\n<td><code>number</code> or <code>number[]</code></td>\n<td><code>1</code></td>\n<td>分割的块数<br/>主持数组传入分块的节点</td>\n<td></td>\n</tr>\n<tr>\n<td>marks</td>\n<td><code>{ [number &#124; string]: string &#124; number &#124; SchemaObject }</code> or <code>{ [number &#124; string]: { style: CSSProperties, label: string } }</code></td>\n<td></td>\n<td>刻度标记<br/>- 支持自定义样式<br/>- 设置百分比</td>\n<td></td>\n</tr>\n<tr>\n<td>tooltipVisible</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示滑块标签</td>\n<td></td>\n</tr>\n<tr>\n<td>tooltipPlacement</td>\n<td><code>auto</code> or <code>bottom</code> or <code>left</code> or <code>right</code></td>\n<td><code>top</code></td>\n<td>滑块标签的位置，默认<code>auto</code>，方向自适应<br/>前置条件：tooltipVisible 不为 false 时有效</td>\n<td></td>\n</tr>\n<tr>\n<td>tipFormatter</td>\n<td><code>function</code></td>\n<td></td>\n<td>控制滑块标签显隐函数<br/>前置条件：tooltipVisible 不为 false 时有效</td>\n<td></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>支持选择范围</td>\n<td></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>默认为 <code>true</code>，选择的 <code>value</code> 会通过 <code>delimiter</code> 连接起来，否则直接将以<code>{min: 1, max: 100}</code>的形式提交<br/>前置条件：开启<code>multiple</code>时有效</td>\n<td></td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td>分隔符</td>\n<td></td>\n</tr>\n<tr>\n<td>unit</td>\n<td><code>string</code></td>\n<td></td>\n<td>单位</td>\n<td></td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可清除<br/>前置条件：开启<code>showInput</code>时有效</td>\n<td></td>\n</tr>\n<tr>\n<td>showInput</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示输入框</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>function</code></td>\n<td></td>\n<td>当 组件 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入</td>\n<td></td>\n</tr>\n<tr>\n<td>onAfterChange</td>\n<td><code>function</code></td>\n<td></td>\n<td>与 <code>onmouseup</code> 触发时机一致，把当前值作为参数传入</td>\n<td></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: number | string |{min: number, max: number}</code> 组件的值</td>\n<td>当值变化时触发的事件</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>[name]: number | string |{min: number, max: number}</code> 组件的值</td>\n<td>当设置 showInput 为 true 时，输入框失去焦点时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>[name]: number | string |{min: number, max: number}</code> 组件的值</td>\n<td>当设置 showInput 为 true 时，输入框获取焦点时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清除输入框<br />前置条件：showInput 和 clearable 都为 true</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: number | string | {min: number, max: number}</code> 更新的值</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "选择范围",
          "fragment": "%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4",
          "fullPath": "#%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4",
          "level": 2
        },
        {
          "label": "控制调整的粒度",
          "fragment": "%E6%8E%A7%E5%88%B6%E8%B0%83%E6%95%B4%E7%9A%84%E7%B2%92%E5%BA%A6",
          "fullPath": "#%E6%8E%A7%E5%88%B6%E8%B0%83%E6%95%B4%E7%9A%84%E7%B2%92%E5%BA%A6",
          "level": 2
        },
        {
          "label": "禁用",
          "fragment": "%E7%A6%81%E7%94%A8",
          "fullPath": "#%E7%A6%81%E7%94%A8",
          "level": 2
        },
        {
          "label": "显示步长",
          "fragment": "%E6%98%BE%E7%A4%BA%E6%AD%A5%E9%95%BF",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E6%AD%A5%E9%95%BF",
          "level": 2
        },
        {
          "label": "分割块数",
          "fragment": "%E5%88%86%E5%89%B2%E5%9D%97%E6%95%B0",
          "fullPath": "#%E5%88%86%E5%89%B2%E5%9D%97%E6%95%B0",
          "level": 2
        },
        {
          "label": "刻度标记",
          "fragment": "%E5%88%BB%E5%BA%A6%E6%A0%87%E8%AE%B0",
          "fullPath": "#%E5%88%BB%E5%BA%A6%E6%A0%87%E8%AE%B0",
          "level": 2
        },
        {
          "label": "输入框",
          "fragment": "%E8%BE%93%E5%85%A5%E6%A1%86",
          "fullPath": "#%E8%BE%93%E5%85%A5%E6%A1%86",
          "level": 2
        },
        {
          "label": "清除输入",
          "fragment": "%E6%B8%85%E9%99%A4%E8%BE%93%E5%85%A5",
          "fullPath": "#%E6%B8%85%E9%99%A4%E8%BE%93%E5%85%A5",
          "level": 2
        },
        {
          "label": "显示标签",
          "fragment": "%E6%98%BE%E7%A4%BA%E6%A0%87%E7%AD%BE",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E6%A0%87%E7%AD%BE",
          "level": 2
        },
        {
          "label": "存成两个字段",
          "fragment": "%E5%AD%98%E6%88%90%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%AE%B5",
          "fullPath": "#%E5%AD%98%E6%88%90%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%AE%B5",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
