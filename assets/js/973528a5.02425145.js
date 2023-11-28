"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=s,h=d["".concat(o,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2794:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_label:"gpt_assistant_agent",title:"agentchat.contrib.gpt_assistant_agent"},i=void 0,l={unversionedId:"reference/agentchat/contrib/gpt_assistant_agent",id:"reference/agentchat/contrib/gpt_assistant_agent",isDocsHomePage:!1,title:"agentchat.contrib.gpt_assistant_agent",description:"GPTAssistantAgent Objects",source:"@site/docs/reference/agentchat/contrib/gpt_assistant_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/gpt_assistant_agent",permalink:"/autogen/docs/reference/agentchat/contrib/gpt_assistant_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/gpt_assistant_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"gpt_assistant_agent",title:"agentchat.contrib.gpt_assistant_agent"},sidebar:"referenceSideBar",previous:{title:"compressible_agent",permalink:"/autogen/docs/reference/agentchat/contrib/compressible_agent"},next:{title:"llava_agent",permalink:"/autogen/docs/reference/agentchat/contrib/llava_agent"}},o=[{value:"GPTAssistantAgent Objects",id:"gptassistantagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"can_execute_function",id:"can_execute_function",children:[],level:4},{value:"reset",id:"reset",children:[],level:4},{value:"clear_history",id:"clear_history",children:[],level:4},{value:"pretty_print_thread",id:"pretty_print_thread",children:[],level:4},{value:"oai_threads",id:"oai_threads",children:[],level:4},{value:"assistant_id",id:"assistant_id",children:[],level:4},{value:"get_assistant_instructions",id:"get_assistant_instructions",children:[],level:4},{value:"delete_assistant",id:"delete_assistant",children:[],level:4}],level:2}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gptassistantagent-objects"},"GPTAssistantAgent Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class GPTAssistantAgent(ConversableAgent)\n")),(0,s.kt)("p",null,"An experimental AutoGen agent class that leverages the OpenAI Assistant API for conversational capabilities.\nThis agent is unique in its reliance on the OpenAI Assistant for state management, differing from other agents like ConversableAgent."),(0,s.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name="GPT Assistant",\n             instructions: Optional[str] = None,\n             llm_config: Optional[Union[Dict, bool]] = None,\n             overwrite_instructions: bool = False)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ",(0,s.kt)("em",{parentName:"li"},"str")," - name of the agent. It will be used to find the existing assistant by name. Please remember to delete an old assistant with the same name if you intend to create a new assistant with the same name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"instructions")," ",(0,s.kt)("em",{parentName:"li"},"str")," - instructions for the OpenAI assistant configuration.\nWhen instructions is not None, the system message of the agent will be\nset to the provided instructions and used in the assistant run, irrespective\nof the overwrite_instructions flag. But when instructions is None,\nand the assistant does not exist, the system message will be set to\nAssistantAgent.DEFAULT_SYSTEM_MESSAGE. If the assistant exists, the\nsystem message will be set to the existing assistant instructions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"llm_config")," ",(0,s.kt)("em",{parentName:"li"},"dict or False")," - llm inference configuration.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"assistant_id: ID of the assistant to use. If None, a new assistant will be created."),(0,s.kt)("li",{parentName:"ul"},"model: Model to use for the assistant (gpt-4-1106-preview, gpt-3.5-turbo-1106)."),(0,s.kt)("li",{parentName:"ul"},"check_every_ms: check thread run status interval"),(0,s.kt)("li",{parentName:"ul"},"tools: Give Assistants access to OpenAI-hosted tools like Code Interpreter and Knowledge Retrieval,\nor build your own tools using Function calling. ref ",(0,s.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/assistants/tools"},"https://platform.openai.com/docs/assistants/tools")),(0,s.kt)("li",{parentName:"ul"},"file_ids: files used by retrieval in run"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"overwrite_instructions")," ",(0,s.kt)("em",{parentName:"li"},"bool")," - whether to overwrite the instructions of an existing assistant.")),(0,s.kt)("h4",{id:"can_execute_function"},"can","_","execute","_","function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def can_execute_function(name: str) -> bool\n")),(0,s.kt)("p",null,"Whether the agent can execute the function."),(0,s.kt)("h4",{id:"reset"},"reset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def reset()\n")),(0,s.kt)("p",null,"Resets the agent, clearing any existing conversation thread and unread message indices."),(0,s.kt)("h4",{id:"clear_history"},"clear","_","history"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def clear_history(agent: Optional[Agent] = None)\n")),(0,s.kt)("p",null,"Clear the chat history of the agent."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"agent")," - the agent with whom the chat history to clear. If None, clear the chat history with all agents.")),(0,s.kt)("h4",{id:"pretty_print_thread"},"pretty","_","print","_","thread"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def pretty_print_thread(thread)\n")),(0,s.kt)("p",null,"Pretty print the thread."),(0,s.kt)("h4",{id:"oai_threads"},"oai","_","threads"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef oai_threads() -> Dict[Agent, Any]\n")),(0,s.kt)("p",null,"Return the threads of the agent."),(0,s.kt)("h4",{id:"assistant_id"},"assistant","_","id"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef assistant_id()\n")),(0,s.kt)("p",null,"Return the assistant id"),(0,s.kt)("h4",{id:"get_assistant_instructions"},"get","_","assistant","_","instructions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def get_assistant_instructions()\n")),(0,s.kt)("p",null,"Return the assistant instructions from OAI assistant API"),(0,s.kt)("h4",{id:"delete_assistant"},"delete","_","assistant"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def delete_assistant()\n")),(0,s.kt)("p",null,"Delete the assistant from OAI assistant API"))}p.isMDXComponent=!0}}]);