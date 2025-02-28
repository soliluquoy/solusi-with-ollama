import { PageAssistHtmlLoader } from "~/loader/html"

import { PageAssistPDFLoader } from "@/loader/pdf"
import { PAMemoryVectorStore } from "@/libs/PAMemoryVectorStore"
import { getPageAssistTextSplitter } from "./text-splitter"

export const getLoader = ({
  html,
  pdf,
  type,
  url
}: {
  url: string
  html: string
  type: string
  pdf: { content: string; page: number }[]
}) => {
  if (type === "pdf") {
    return new PageAssistPDFLoader({
      pdf,
      url
    })
  } else {
    return new PageAssistHtmlLoader({
      html,
      url
    })
  }
}

export const memoryEmbedding = async ({
  html,
  keepTrackOfEmbedding,
  ollamaEmbedding,
  pdf,
  setIsEmbedding,
  setKeepTrackOfEmbedding,
  type,
  url
}: {
  url: string
  html: string
  type: string
  pdf: { content: string; page: number }[]
  keepTrackOfEmbedding: Record<string, PAMemoryVectorStore>
  ollamaEmbedding: any
  setIsEmbedding: (value: boolean) => void
  setKeepTrackOfEmbedding: (value: Record<string, PAMemoryVectorStore>) => void
}) => {
  setIsEmbedding(true)
  const loader = getLoader({ html, pdf, type, url })
  const docs = await loader.load()
  const textSplitter = await getPageAssistTextSplitter()

  const chunks = await textSplitter.splitDocuments(docs)

  const store = new PAMemoryVectorStore(ollamaEmbedding)

  await store.addDocuments(chunks)
  setKeepTrackOfEmbedding({
    ...keepTrackOfEmbedding,
    [url]: store
  })
  setIsEmbedding(false)
  return store
}
