"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[52905],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},suggestedProblems:function(){return d},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Sliding Window",description:"Sliding window is a technique used to solve problems in array or string.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sliding window","algorithm"]},l=void 0,c={unversionedId:"basic-topics/sliding-window",id:"basic-topics/sliding-window",title:"Sliding Window",description:"Sliding window is a technique used to solve problems in array or string.",source:"@site/tutorials/basic-topics/sliding-window.md",sourceDirName:"basic-topics",slug:"/basic-topics/sliding-window",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sliding-window",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/sliding-window.md",tags:[],version:"current",frontMatter:{title:"Sliding Window",description:"Sliding window is a technique used to solve problems in array or string.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sliding window","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Queue & Stack",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/queue-and-stack"},next:{title:"Sorting",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sorting"}},u={},p=[{value:"Overview",id:"overview",level:2}],d=[{problemName:"1852 - Distinct Numbers in Each Subarray",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/distinct-numbers-in-each-subarray",solutionLink:"../../solutions/1800-1899/distinct-numbers-in-each-subarray-medium"},{problemName:"1004 - Max Consecutive Ones III",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/max-consecutive-ones-iii",solutionLink:"../../solutions/1000-1099/max-consecutive-ones-iii-medium"},{problemName:"1876 - Substrings of Size Three with Distinct Characters",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/",solutionLink:""}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=h("TutorialAuthors"),f=h("Table"),g={toc:p,suggestedProblems:d};function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{names:"@heiheihang",mdxType:"TutorialAuthors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In some problems, we need to keep track of the elements in a list that satisfy certain conditions. Let's take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/"},"1876 - Substrings of Size Three with Distinct Characters"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A string is ",(0,o.kt)("strong",{parentName:"p"},"good")," if there are no repeated characters."),(0,o.kt)("p",{parentName:"blockquote"},"Given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", return ",(0,o.kt)("em",{parentName:"p"},"the number of ",(0,o.kt)("strong",{parentName:"em"},"good substrings")," of length ",(0,o.kt)("strong",{parentName:"em"},"three")," in")," ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,o.kt)("p",{parentName:"blockquote"},"Note that if there are multiple occurrences of the same substring, every occurrence should be counted."),(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("strong",{parentName:"p"},"substring")," is a contiguous sequence of characters in a string.")),(0,o.kt)("p",null,"For example, with this input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s = "xyzzaz"\n')),(0,o.kt)("p",null,"The substrings with length of 3 are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s1 = "xyz" #index 0-2\ns2 = "yzz" #index 1-3\ns3 = "zza" #index 2-4\ns4 = "zaz" #index 3-5\n')),(0,o.kt)("p",null,"Among these substrings, the only substring with distinct characters is ",(0,o.kt)("inlineCode",{parentName:"p"},'"xyz"'),"."),(0,o.kt)("p",null,"In this problem, we need to keep a ",(0,o.kt)("em",{parentName:"p"},"window")," of substrings of length 3."),(0,o.kt)("p",null,"We can use the following strategy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"left_pointer")," to keep track of the left character of the substring length of 3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"right_pointer")," to keep track of the right character of the substring length of 3"),(0,o.kt)("li",{parentName:"ul"},"We check if the following characters are unique:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s[left_pointer]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s[left_pointer+1]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s[right_pointer]"))))),(0,o.kt)("p",null,"Let's take a look at the following solution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def countGoodSubstrings(self, s: str) -> int:\n        \n        #two pointers to keep track of sliding window\n        left_pointer = 0\n        right_pointer = 2\n        \n        unique_substring_count = 0\n        \n        #when the sliding window is within s\n        while(right_pointer < len(s)):\n            \n            #we declare the 3 characters in the sliding window\n            first_char = s[left_pointer]\n            second_char = s[left_pointer + 1]\n            third_char = s[right_pointer]\n            \n            #if all characters are unique, add 1\n            if(first_char != second_char and first_char != third_char and second_char != third_char):\n                unique_substring_count += 1\n            \n            #shift the sliding window right\n            left_pointer += 1\n            right_pointer += 1\n        \n        #return result\n        return unique_substring_count\n")),(0,o.kt)("p",null,"In this problem, the size of the sliding window is constant. There are harder problems with varying sliding window size, but you need to learn ",(0,o.kt)("a",{parentName:"p",href:"hash-map"},"Hash Map")," first."),(0,o.kt)(f,{title:"Suggested Problems",data:d,mdxType:"Table"}))}b.isMDXComponent=!0}}]);