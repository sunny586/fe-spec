import{_ as a,c as s,a2 as n,o as l}from"./chunks/framework.D1PR7iD3.js";const u=JSON.parse('{"title":"Git 规范","description":"","frontmatter":{"title":"Git 规范","categories":["工程规范"],"tags":["工程规范"]},"headers":[],"relativePath":"engineering/git.md","filePath":"engineering/git.md","lastUpdated":1726105719000}'),i={name:"engineering/git.md"};function o(t,e,p,c,d,r){return l(),s("div",null,e[0]||(e[0]=[n(`<h1 id="git-规范" tabindex="-1">Git 规范 <a class="header-anchor" href="#git-规范" aria-label="Permalink to &quot;Git 规范&quot;">​</a></h1><h2 id="_1-git-提交日志格式规范" tabindex="-1">1. Git 提交日志格式规范 <a class="header-anchor" href="#_1-git-提交日志格式规范" aria-label="Permalink to &quot;1. Git 提交日志格式规范&quot;">​</a></h2><h3 id="_1-1-前言" tabindex="-1">1.1. 前言 <a class="header-anchor" href="#_1-1-前言" aria-label="Permalink to &quot;1.1. 前言&quot;">​</a></h3><p>为什么要对 <code>Git</code> 提交日志（<code>message</code>）的格式进行规范约束？</p><ol><li>更方便、快捷地浏览和了解项目的历史信息。</li><li>有利于保证提交内容的独立性，避免把所有改动都放在一个提交里面。</li><li>便于通过脚本自动化生成 <code>CHANGELOG</code>。</li></ol><h3 id="_1-2-基本的-message-格式" tabindex="-1">1.2. 基本的 <code>message</code> 格式 <a class="header-anchor" href="#_1-2-基本的-message-格式" aria-label="Permalink to &quot;1.2. 基本的 \`message\` 格式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;[optional scope]: &lt;subject&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional body]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional footer(s)]</span></span></code></pre></div><p>其中 <code>message header</code>（即首行）必选，scope、body 和 footer 可选。</p><h4 id="_1-2-1-字数限制" tabindex="-1">1.2.1. 字数限制 <a class="header-anchor" href="#_1-2-1-字数限制" aria-label="Permalink to &quot;1.2.1. 字数限制&quot;">​</a></h4><ul><li>header（首行）：只有一行，不超过 50 个字符</li><li>body：每行不超过 72 个字符</li><li>footer：每行不超过 72 个字符</li></ul><blockquote><p>为什么要有字数限制？</p><ul><li>header： 像 Linux、Git 这样的开源项目，是以邮件列表作为代码评审的平台，header 要作为邮件的标题，而邮件标题本身就有长度的限制，并且标题太长也不利于浏览和信息获取。</li><li>body 和 footer：源于大部分编程语言的编码规范，最初源于打字机宽度等物理设备的限制，后来慢慢成为默认遵守的规范。</li></ul></blockquote><h4 id="_1-2-2-语言选择" tabindex="-1">1.2.2. 语言选择 <a class="header-anchor" href="#_1-2-2-语言选择" aria-label="Permalink to &quot;1.2.2. 语言选择&quot;">​</a></h4><p><strong>在开源项目中</strong>：推荐使用英文，因为项目的开发者和参与者可能来自世界各地，使用英文可以更广泛的传递信息。</p><p><strong>在内部项目（并且短时间内也不涉及开源）中</strong>：应该选择内部人员普遍能够熟练表达的语言。</p><p>例如在国内的团队中，可以使用中文。</p><blockquote><p>关于使用中文可能会出现乱码的问题：处理字符集和字符编码的问题应该是每个程序员的必修课。</p><p>关于使用英文天然正确性的问题：因地制宜，适合的才是最好的。</p></blockquote><h3 id="_1-3-message-header" tabindex="-1">1.3. message header <a class="header-anchor" href="#_1-3-message-header" aria-label="Permalink to &quot;1.3. message header&quot;">​</a></h3><h4 id="_1-3-1-type" tabindex="-1">1.3.1. type <a class="header-anchor" href="#_1-3-1-type" aria-label="Permalink to &quot;1.3.1. type&quot;">​</a></h4><p><code>type</code> 用来描述本次提交的改动类型，可选值及对应含义如下：</p><ul><li><code>feat</code>: 新增功能</li><li><code>fix</code>: 修复 bug</li><li><code>docs</code>: 文档相关的改动</li><li><code>style</code>: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)</li><li><code>test</code>: 新增或修改测试用例</li><li><code>refactor</code>: 重构代码或其他优化举措</li><li><code>chore</code>: 项目工程方面的改动，代码逻辑并未产生任何变化</li><li><code>revert</code>: 恢复之前的提交</li></ul><blockquote><p>注意：</p><ol><li><code>commit message</code> 的 <code>type</code> 和 <code>changelog</code> 的 <code>type</code> 存在紧密联系，然而它们两者之间并非一一对应，比如在 <code>changelog</code> 中一般不会指出文档 <code>docs</code> 或测试用例 <code>test</code> 等方面发生的变化</li><li><code>css</code> 样式文件的修改一般属于 <code>feat</code> 或者 <code>fix</code>，并不是 <code>style</code></li></ol></blockquote><h4 id="_1-3-2-scope" tabindex="-1">1.3.2. scope <a class="header-anchor" href="#_1-3-2-scope" aria-label="Permalink to &quot;1.3.2. scope&quot;">​</a></h4><p><code>scope</code> 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围）。</p><p><code>scope</code> 的具体取值视项目而定。以淘宝详情页为例，取值可以是：<code>header</code>, <code>footer</code>, <code>favorite</code>, <code>sku</code>, etc...</p><p>如果是 <code>monorepo</code> 的项目，<code>scope</code> 取值可以是 <code>subpackage</code> 的名称。例如 <code>babel</code> 项目中对某个 <code>package</code> 的修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chore(babel-helper-plugin-utils): add npmignore</span></span></code></pre></div><h4 id="_1-3-3-subject" tabindex="-1">1.3.3. subject <a class="header-anchor" href="#_1-3-3-subject" aria-label="Permalink to &quot;1.3.3. subject&quot;">​</a></h4><p>subject 用来概括和描述本次提交的改动内容，需注意以下几点：</p><ol><li><p>时态方面使用一般现在时，不要使用过去时。虽然查看 <code>message</code> 时，<code>message</code> 内容本身都发生在过去，然而对于主题来说，使用现在时的时态更简洁明确，并且更易达成一致性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>docs: delete redundant docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>docs: deleted redundant docs</span></span></code></pre></div></li><li><p>句式使用祈使句。即一般情况不要增加主语。因为在绝大情况下，主语都是作者『我』：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// good</span></span>
<span class="line"><span>docs: delete redundant docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>docs: i delete redundant docs</span></span></code></pre></div></li><li><p>句首无需大写，句尾无需结束标点。因为主题（或标题）本身不用形成完整的句子：</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // good</span></span>
<span class="line"><span>  docs: delete redundant docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // bad</span></span>
<span class="line"><span>  docs: Delete redundant docs.</span></span>
<span class="line"><span>  \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1.4. message body</span></span>
<span class="line"><span></span></span>
<span class="line"><span>日志的内容主体 body 用来描述详细的提交内容，可写可不写，需注意以下几点：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 时态方面使用一般现在时，不要用过去时态。</span></span>
<span class="line"><span>2. 句式视情况而定，一般使用祈使句式。</span></span>
<span class="line"><span>3. 标点方面遵循一般的文档格式规范。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1.5. message footer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>footer 通常用于代码评审过程记录、作者签名等。例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>Reported-by: User1 &lt;user1@example.com&gt;</span></span>
<span class="line"><span>Helped-by: User2 &lt;user2@example.com&gt;</span></span>
<span class="line"><span>Reviewed-by: User3 &lt;user3@example.com&gt;</span></span>
<span class="line"><span>Signed-off-by: Author &lt;author@example.com&gt;</span></span></code></pre></div><blockquote><p>为什么要有签名区？</p><p>因为一个提交的元信息中只有作者（author）、提交者（committer）两个字段，而一段代码的诞生，参与的人往往不止于此，还可能有问题报告者（Reported-by）、代码评审者（Reviewed-by）、上游 Committer 的签名（Signed-off-by）。为此一些开源项目（如 Git、Linux）的一个约定俗成的习惯，是在提交的最后加上签名，每个贡献者一行，从上到下可以看到这段代码诞生的过程。</p></blockquote><p>还可以添加其他元信息，例如：</p><h4 id="引用-issues" tabindex="-1">引用 <code>Issues</code> <a class="header-anchor" href="#引用-issues" aria-label="Permalink to &quot;引用 \`Issues\`&quot;">​</a></h4><p>可以在 <code>commit</code> 信息里使用关键字 + <code>Issue ID</code>（<code>Gitlab</code> / <code>Github</code> 或其他平台的），来表明该提交解决了某个 <code>Issue</code>。推荐使用的关键字有：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">close</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">closes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">closed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fix</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fixes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fixed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resolve</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resolves</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resolved</span></span></code></pre></div><p>关键字的选用可以根据当前语义、关联的 <code>Issue</code> 是否在当前仓库下，甚至是 commit 消息的长度限制来决定。</p><ul><li><code>close</code>: 关闭当前仓库的 <code>Issue</code></li><li><code>fix</code>: 关闭当前或其他仓库的 <code>Issue</code>, 一般指 Bug 修复</li><li><code>resolve</code>: 关闭当前或其他仓库的 <code>Issue</code></li></ul><p>关闭多个 <code>Issues</code> 使用如下格式:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Close #1, #2, #3</span></span>
<span class="line"><span>Close #1, close #2, close #3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fix #1, #2, #3</span></span>
<span class="line"><span>Fix #1, close #2, close #3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Resolve #1, #2, #3</span></span>
<span class="line"><span>Resolve #1, close #2, close #3</span></span></code></pre></div><h4 id="破坏性变动-breaking-changes" tabindex="-1">破坏性变动（<code>Breaking changes</code>） <a class="header-anchor" href="#破坏性变动-breaking-changes" aria-label="Permalink to &quot;破坏性变动（\`Breaking changes\`）&quot;">​</a></h4><p>如果本次提交的改动是破坏性的，需要在这里声明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BREAKING CHANGE: 为了组件 API 规范的统一，本次升级将 size 属性的 value 值从 \`s|m|l\` 替换为 \`small|medium|large\`。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请按照如下方式升级：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Button size=&quot;s&quot;&gt;提交&lt;/Button&gt;</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;Button size=&quot;small&quot;&gt;提交&lt;/Button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续使用 size=&quot;m&quot; 可能会导致样式错误。</span></span></code></pre></div><h2 id="_2-git-分支命名规范" tabindex="-1">2. Git 分支命名规范 <a class="header-anchor" href="#_2-git-分支命名规范" aria-label="Permalink to &quot;2. Git 分支命名规范&quot;">​</a></h2><h3 id="_2-1-分支模型选择的说明" tabindex="-1">2.1. 分支模型选择的说明 <a class="header-anchor" href="#_2-1-分支模型选择的说明" aria-label="Permalink to &quot;2.1. 分支模型选择的说明&quot;">​</a></h3><p>目前互联网和社区中流传最广泛的一个分支模型 <a href="https://github.com/nvie/gitflow" target="_blank" rel="noreferrer">Git Flow</a> 出自 <a href="https://nvie.com/posts/a-successful-git-branching-model/" target="_blank" rel="noreferrer">a-successful-git-branching-model</a> 这篇十年前的文章，文章作者 Vincent Driessen 在 2020 年三月份的时候已经公开表示，该分支模型已经不适用于现如今持续交付的软件工程方式，推荐在持续交付的软件工程中使用更简单的 <a href="https://guides.github.com/introduction/flow/" target="_blank" rel="noreferrer">GitHub Flow</a> 模型。</p><h3 id="_2-2-分支命名" tabindex="-1">2.2. 分支命名 <a class="header-anchor" href="#_2-2-分支命名" aria-label="Permalink to &quot;2.2. 分支命名&quot;">​</a></h3><p>新建分支的命名格式为：<code>{type}-{issue id}-the-thing-you-do</code></p><ul><li><code>type</code>：和上文 1.3.1 章节中的 type 保持一致</li><li><code>issue id</code>：与分支内容相关的 issue id，如果无关，则可以忽略</li></ul><p>比如以下格式都满足规范：</p><ul><li><code>feat-ssr-prefetch</code>：新增 ssr prefetch 功能</li><li><code>fix-1379-component-insert-order</code>：修复 issue 1379 中提到的组件插入顺序 bug</li><li><code>revert-14218-memory-leak-on-unmount</code>：回退版本解决 issue 14218 提到的组件卸载时内存泄露的问题</li></ul><blockquote><p>注：该命名规范只针对新建的临时分支，不包括如 master、develop 等常驻分支</p></blockquote><h3 id="_2-3-多版本分支命名" tabindex="-1">2.3. 多版本分支命名 <a class="header-anchor" href="#_2-3-多版本分支命名" aria-label="Permalink to &quot;2.3. 多版本分支命名&quot;">​</a></h3><p>在需要同时维护多个版本的项目中，只使用 master 作为主干分支显然是无法满足需求的，但是又不想使用 Git Flow 这种复杂、繁琐的分支结构，那么就可以每发布一个新的版本就单独拉一个新的分支，例如：</p><blockquote><ul><li><code>1.0.0-stable</code></li><li><code>2.0.0-stable</code></li></ul></blockquote><p>其他开发过程中的分支命名参考上节 2.2 的分支命名规范。</p><h2 id="_3-git-tag-命名规范" tabindex="-1">3. Git tag 命名规范 <a class="header-anchor" href="#_3-git-tag-命名规范" aria-label="Permalink to &quot;3. Git tag 命名规范&quot;">​</a></h2><p><code>Git tag</code> 就是通过语义化的名称来给仓库标注一个个具体的节点。与此同时还可以根据标签名称来大致了解当前项目的兼容性和迭代情况。</p><p>命名格式为 <code>v{semver}</code>，<code>semver</code> 是遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">semantic version</a> 的版本号，例如 <code>v1.2.3</code>。</p><p>相比于使用例如 <code>git tag v1.2.3</code> 这种「轻量标签」，更推荐使用如下命令生成「附注标签」：</p><p><code>git tag -a v1.2.3 -m &quot;发布经销商管理模块&quot;</code></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ol><li><a href="https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md" target="_blank" rel="noreferrer">AngularJS 代码贡献指南</a></li><li><a href="https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.j8e4paqkfz0q" target="_blank" rel="noreferrer">AngularJS Git Commit Message Conventions</a></li><li><a href="http://karma-runner.github.io/0.13/dev/git-commit-msg.html" target="_blank" rel="noreferrer">Karma 的 Git 日志规范</a></li><li><a href="http://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages" target="_blank" rel="noreferrer">StackOverflow - 在 Git 日志中我该用过去时态还是现在时态？</a></li><li><a href="https://nvie.com/posts/a-successful-git-branching-model/" target="_blank" rel="noreferrer">一个成功的 Git 分支模型</a></li><li><a href="https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE" target="_blank" rel="noreferrer">Git 基础打标签</a></li><li><a href="https://en.wikipedia.org/wiki/Characters_per_line" target="_blank" rel="noreferrer">每行字符数</a></li><li><a href="https://www.conventionalcommits.org" target="_blank" rel="noreferrer">Conventional Commits</a></li></ol>`,62)]))}const g=a(i,[["render",o]]);export{u as __pageData,g as default};
