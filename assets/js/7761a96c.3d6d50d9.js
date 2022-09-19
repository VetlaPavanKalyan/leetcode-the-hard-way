"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8991],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return u}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),u=s,k=N["".concat(l,".").concat(u)]||N[u]||c[u]||m;return t?n.createElement(k,r(r({ref:e},o),{},{components:t})):n.createElement(k,r({ref:e},o))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},59671:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return N}});var n,s=t(87462),m=t(63366),r=(t(67294),t(3905)),p=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-square-numbers/"},i="0633 - Sum of Square Numbers (Medium)",o={unversionedId:"0600-0699/sum-of-square-numbers-medium",id:"0600-0699/sum-of-square-numbers-medium",title:"0633 - Sum of Square Numbers (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-square-numbers/",source:"@site/solutions/0600-0699/0633-sum-of-square-numbers-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/sum-of-square-numbers-medium",permalink:"/leetcode-the-hard-way/solutions/0600-0699/sum-of-square-numbers-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0633-sum-of-square-numbers-medium.md",tags:[],version:"current",sidebarPosition:633,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-square-numbers/"},sidebar:"tutorialSidebar",previous:{title:"0609 - Find Duplicate File in System (Medium)",permalink:"/leetcode-the-hard-way/solutions/0600-0699/find-duplicate-file-in-system-medium"},next:{title:"0637 - Average of Levels in Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0600-0699/average-of-levels-in-binary-tree-medium"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],u=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}),k={toc:N};function h(a){var e=a.components,t=(0,m.Z)(a,p);return(0,r.kt)("wrapper",(0,s.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0633---sum-of-square-numbers-medium"},"0633 - Sum of Square Numbers (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sum-of-square-numbers/"},"https://leetcode.com/problems/sum-of-square-numbers/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a non-negative integer ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", decide whether there're two integers ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"a2 + b2 = c"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: c = 5\nOutput: true\nExplanation: 1 * 1 + 2 * 2 = 5\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: c = 3\nOutput: false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= c <= 2^31 - 1"))),(0,r.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,r.kt)("p",null,"Prerequisite: ",(0,r.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,r.kt)("p",null,"We can rewrite ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"a"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"b"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a ^ 2 + b ^ 2 = c")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"b"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"a"),(0,r.kt)("mn",{parentName:"msup"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b ^ 2 = c - a ^ 2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," so that we can fix ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and then check if ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"a"),(0,r.kt)("mn",{parentName:"msup"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c - a ^ 2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," is a perfect square. If so, we return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". If we couldn't find one at the end, return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"To determine if ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is a perfect square, we can use binary search to look for ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, x]"),". If ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is greater 2, the range is actually ",(0,r.kt)("inlineCode",{parentName:"p"},"[2, x / 2]"),". In case you have solved ",(0,r.kt)("a",{parentName:"p",href:"../0300-0399/valid-perfect-square-easy"},"0367 - Valid Perfect Square (Easy)"),", we can use the same solution directly."),(0,r.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // 0367 - Valid Perfect Square (Easy)\n    bool isPerfectSquare(int num) {\n        // init possible range\n        // for num > 2, the range is actually [2, num / 2]\n        long long l = 0, r = num;\n        while (l < r) {\n            long long m = l + (r - l) / 2;\n            // exclude m\n            if (num > m * m) l = m + 1;\n            // include m\n            else r = m;\n        }\n        // check if it is a perfect square\n        return l * l == num;\n    }\n    \n    bool judgeSquareSum(int c) {\n        // a ^ 2 + b ^ 2 = c\n        // b ^ 2 = c - a ^ 2\n    // fix a \n        for (long long a = 0; a * a <= c; a++) {\n        // check if c - a ^ 2 is a perfect square or not\n            if (isPerfectSquare(c - (int) a * a)) {\n                return true;\n            }\n        }\n        return false;\n    }\n};\n")))}h.isMDXComponent=!0}}]);