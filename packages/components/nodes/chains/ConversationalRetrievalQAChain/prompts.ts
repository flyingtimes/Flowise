export const default_qa_template =  `使用以下的信息片段来回答问题,如果你不知道答案,就回答:我不知道,不要尝试自己编造答案. 使用中文回答所有问题.

{context}

问题: {question}
有帮助的回答:`
export const qa_template = `使用以下的信息片段来回答问题.

{context}

问题: {question}
有帮助的回答:`
export const default_map_reduce_template = `基于长文档和问题的以下提取部分，创建最终答案。
如果你不知道答案，就说你不知道。不要试图编造答案 

{summaries}

问题: {question}
有帮助的回答:`

export const map_reduce_template = `给定长文档和问题的以下提取部分，创建最终答案

{summaries}

问题: {question}
有帮助的回答:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `上下文信息如下. 
---------------------
{context}
---------------------
基于上下文而不是先验知识, ${sysPrompt}
回答问题: {question}.
答案:`
    if (!sysPrompt)
        returnPrompt = `以下是上下文信息. 
---------------------
{context}
---------------------
基于上下文而不是先验知识回答问题: {question}.
答案:`
    return returnPrompt
}

export const refine_template = `以下是原始的问题: {question}
我们得到一个已知答案: {existing_answer}
如果有需要的话，我们可以继续完善回答，根据以下给出的信息
------------
{context}
------------
基于新的内容继续完善回答内容，从而得到一个更好的答案
如果你无法得到更好的答案，就回复最初的答案.
`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `
给定以下对话和后续问题，将后续问题改写为独立问题，使用与后续问题相同的语言回答。将其包含在独立问题中
历史对话:
{chat_history}
Follow Up Input: {question}
Standalone question:`
