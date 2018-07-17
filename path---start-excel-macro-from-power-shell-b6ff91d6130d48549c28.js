webpackJsonp([28582402883985],{800:function(e,t){e.exports={data:{post:{id:"C:/dasGatsblog/content/posts/2017-01-17--Start-Excel-Macro-From-PowerShell/index.md absPath of file >>> MarkdownRemark",html:'<h1>Create PowerShell Script to open and run Macro in Excel</h1>\n<p>Below is an example of how to use PowerShell to automatically run an Excel macro.</p>\n<div class="gatsby-highlight" data-language="powershell">\n      <pre class="language-powershell"><code class="language-powershell"><span class="token keyword">Function</span> RunExcelMacro<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment"># Open Excel file</span>\n    <span class="token variable">$excel</span> = <span class="token function">new-object</span> <span class="token operator">-</span>comobject excel<span class="token punctuation">.</span>application\n    <span class="token variable">$filePath</span> = <span class="token string">"C:\\PowershellSheet.xlsm"</span>\n    <span class="token variable">$workbook</span> = <span class="token variable">$excel</span><span class="token punctuation">.</span>Workbooks<span class="token punctuation">.</span>Open<span class="token punctuation">(</span><span class="token variable">$FilePath</span><span class="token punctuation">)</span>\n    <span class="token variable">$excel</span><span class="token punctuation">.</span>Visible = <span class="token boolean">$true</span>\n    <span class="token variable">$worksheet</span> = <span class="token variable">$workbook</span><span class="token punctuation">.</span>worksheets<span class="token punctuation">.</span>item<span class="token punctuation">(</span>1<span class="token punctuation">)</span>\n    <span class="token function">Write-Host</span> <span class="token string">"Running macro in excel to scrub data."</span>\n    <span class="token variable">$excel</span><span class="token punctuation">.</span>Run<span class="token punctuation">(</span><span class="token string">"PowershellMacro"</span><span class="token punctuation">)</span>\n    <span class="token variable">$workbook</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token variable">$workbook</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token variable">$excel</span><span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">Write-Host</span> <span class="token string">"Closed Excel"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>This code calls creates a COM Excel object and then opens an Excel Macro called “PowershellMacro”. After it executes the macro then we explicitly quit excel and the process closes. </p>\n<p>Here is the xlsm file: <a href="/PowershellSheet-f7fa4e42f04412c4402fd10b1108e372.xlsm" target="_blank">PowershellSheet.xlsm</a></p>\n<p>Here is the ps1 file:  <a href="/PowershellExcelMacro-7e251a21deb5dc9b30d2dcaa495814e0.ps1" target="_blank">PowershellExcelMacro.ps1</a></p>\n<p>Here are some good references on how to use Excel inside of PowerShell.</p>\n<ul>\n<li><a href="https://blogs.technet.microsoft.com/heyscriptingguy/2006/09/08/how-can-i-use-windows-powershell-to-automate-microsoft-excel/" target="_blank">Scripting guy</a> </li>\n<li><a href="http://ramblingcookiemonster.github.io/PSExcel-Intro/" target="_blank">Rambling Cookie Monster</a></li>\n<li><a href="https://posh2scripting.wordpress.com/2013/07/31/automating-excel-spreadsheets-with-powershell/" target="_blank">Posh2Scripting</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Create PowerShell Script to open and run Macro in Excel"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Below is an example of how to use PowerShell to automatically run an Excel macro."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"powershell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-powershell"]},children:[{type:"element",tagName:"code",properties:{className:["language-powershell"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"Function"}]},{type:"text",value:" RunExcelMacro"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Open Excel file"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$excel"}]},{type:"text",value:" = "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"new-object"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"comobject excel"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"application\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$filePath"}]},{type:"text",value:" = "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"C:\\PowershellSheet.xlsm"'}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$workbook"}]},{type:"text",value:" = "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$excel"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"Workbooks"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"Open"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$FilePath"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$excel"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"Visible = "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"$true"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$worksheet"}]},{type:"text",value:" = "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$workbook"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"worksheets"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"item"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"1"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"Write-Host"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Running macro in excel to scrub data."'}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$excel"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"Run"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"PowershellMacro"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$workbook"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"save"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$workbook"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"close"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","variable"]},children:[{type:"text",value:"$excel"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"quit"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"Write-Host"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Closed Excel"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This code calls creates a COM Excel object and then opens an Excel Macro called “PowershellMacro”. After it executes the macro then we explicitly quit excel and the process closes. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the xlsm file: "},{type:"element",tagName:"a",properties:{href:"/PowershellSheet-f7fa4e42f04412c4402fd10b1108e372.xlsm",target:"_blank"},children:[{type:"text",value:"PowershellSheet.xlsm"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the ps1 file:  "},{type:"element",tagName:"a",properties:{href:"/PowershellExcelMacro-7e251a21deb5dc9b30d2dcaa495814e0.ps1",target:"_blank"},children:[{type:"text",value:"PowershellExcelMacro.ps1"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here are some good references on how to use Excel inside of PowerShell."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blogs.technet.microsoft.com/heyscriptingguy/2006/09/08/how-can-i-use-windows-powershell-to-automate-microsoft-excel/",target:"_blank"},children:[{type:"text",value:"Scripting guy"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://ramblingcookiemonster.github.io/PSExcel-Intro/",target:"_blank"},children:[{type:"text",value:"Rambling Cookie Monster"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://posh2scripting.wordpress.com/2013/07/31/automating-excel-spreadsheets-with-powershell/",target:"_blank"},children:[{type:"text",value:"Posh2Scripting"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/Start-Excel-Macro-From-PowerShell/",prefix:"2017-01-17"},frontmatter:{title:"PowerShell with Microsoft Excel Macro",tags:["powershell","excel","macro"],subTitle:null,cover:{childImageSharp:{resize:{src:"/static/aboutPic-08d9be1636ec1583cf14620dc1e5b426-ada8c.jpg"}}}}},author:{id:"C:/dasGatsblog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Paul B Castillo</strong> - Web developer with a passion for automation.</p>"},footnote:{id:"C:/dasGatsblog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>home of the <a href="https://github.com/376888/">personal Tech Blog of Paul B. Castillo</a></li>\n<li>built by <a href="http://paulbcastillo.me">Paul B. Castillo</a></li>\n<li>GatsbyJS, ReactJs, CSS in JS</li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"..."}}}},pathContext:{slug:"/Start-Excel-Macro-From-PowerShell/"}}}});
//# sourceMappingURL=path---start-excel-macro-from-power-shell-b6ff91d6130d48549c28.js.map