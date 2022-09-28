"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[17940],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,N=u["".concat(o,".").concat(h)]||u[h]||c[h]||s;return t?n.createElement(N,m(m({ref:a},l),{},{components:t})):n.createElement(N,m({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var p=2;p<s;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67817:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n,r=t(87462),s=t(63366),m=(t(67294),t(3905)),i=["components"],o={title:"Brute Force",description:"Brute Force is used when the problem size is limited",hide_table_of_contents:!0,keywords:["leetcode","tutorial","brute force"]},p=void 0,l={unversionedId:"basic-topics/brute-force",id:"basic-topics/brute-force",title:"Brute Force",description:"Brute Force is used when the problem size is limited",source:"@site/tutorials/basic-topics/brute-force.md",sourceDirName:"basic-topics",slug:"/basic-topics/brute-force",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/brute-force",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/brute-force.md",tags:[],version:"current",frontMatter:{title:"Brute Force",description:"Brute Force is used when the problem size is limited",hide_table_of_contents:!0,keywords:["leetcode","tutorial","brute force"]},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/binary-search"},next:{title:"Hash Map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Example 1: 1480 -Running Sum of 1d Array",id:"example-1-1480--running-sum-of-1d-array",level:2},{value:"Example 2: 2006 - Count Number of Pairs With Absolute Difference K",id:"example-2-2006---count-number-of-pairs-with-absolute-difference-k",level:2}],h=(n="TutorialAuthors",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)}),N={toc:u};function k(e){var a=e.components,t=(0,s.Z)(e,i);return(0,m.kt)("wrapper",(0,r.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)(h,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,m.kt)("h2",{id:"overview"},"Overview"),(0,m.kt)("p",null,"Brute Force is a straightforward method of solving a problem. It is used when the problem size is limited as we try each possible answer one at a time. Usually it works in Easy problems or the first problem in contests. Moreover, sometimes if we get stuck in a problem, we may think of a brute force solution first and optimize it bit by bit."),(0,m.kt)("h2",{id:"example-1-1480--running-sum-of-1d-array"},"Example 1: ",(0,m.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/running-sum-of-1d-array/"},"1480 -Running Sum of 1d Array")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] ... nums[i]).\nReturn the running sum of nums.\n\nInput: nums = [1,2,3,4]\nOutput: [1,3,6,10]\nExplanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]\n")),(0,m.kt)("p",null,"For a brute force solution, we iterate each element ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a[i]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and we iterate from ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"0.."),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j = [0 .. i]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"0.."),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to add ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a[j]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),". This solution is acceptable but it is slow as we have two for-loops here. A better approach would be using ",(0,m.kt)("a",{parentName:"p",href:"../basic-topics/prefix-sum"},"Prefix Sum")," to reduce time complexity."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> runningSum(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> ans(n);\n        for (int i = 0; i < n; i++) {\n            int sum = 0;\n            for (int j = 0; j <= i; j++) {\n                sum += nums[j];\n            }\n            ans[i] = sum;\n        }\n        return ans;\n    }\n};\n")),(0,m.kt)("h2",{id:"example-2-2006---count-number-of-pairs-with-absolute-difference-k"},"Example 2: ",(0,m.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/"},"2006 - Count Number of Pairs With Absolute Difference K")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.\n\nThe value of |x| is defined as:\n\nx if x >= 0.\n-x if x < 0.\n")),(0,m.kt)("p",null,"Similar to Example 1, we iterate each element and iterate the elements after that to search for each pair to see if the condition can be met or not. Some better approaches would be using ",(0,m.kt)("a",{parentName:"p",href:"../basic-topics/sliding-window"},"Sliding Window")," or Counting Sort to reduce time complexity."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int countKDifference(vector<int>& nums, int k) {\n        int n = nums.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (abs(nums[i] - nums[j]) == k) {\n                    ans += 1;\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);