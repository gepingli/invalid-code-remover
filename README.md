# 功能介绍
## 清除console
- 鼠标右键点击文件或者目录
- 点击 remove console
- 如果是目录，会删除目录下属所有子文件中的 console
- 如果是文件，会删除该文件中的 console
## 清除debugger
- 鼠标右键点击文件或者目录
- 点击 remove debugger
- 如果是目录，会删除目录下属所有子文件中的 debugger
- 如果是文件，会删除该文件中的 debugger
## 体验优化

**不进行删除console以及debugger的目录名**：
- public
- dist
- node_modules
- docs
- test- 

**不进行删除console以及debugger的文件后缀名**：
- css
- sass
- less
- md
- lock
- json
- yarnrc
- svg
- png
- gitignore
- vscodeignore
- 无后缀

**文件格式一致性**：
> 使用本插件删除console或者debugger后文件不会出现格式问题，并且如果删除console或者debugger后本行是空行会自动删除本行，完全不影响原文件格式～