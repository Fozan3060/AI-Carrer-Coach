export interface CoverLetterFormData {
  fullName: string
  jobTitle: string
  companyName: string
  resumeHighlights: string
  jobDescription: string
}
type content = {
  content:string
}
export interface CoverLetterResponse {
  output: {
    output:content[]
    suggestions?: string[]
  }
}

export interface CoverLetterRecord {
  id: number
  recordId: string
  content: {
    formData: CoverLetterFormData
    generatedLetter: string
    suggestions?: string[]
  }
  userEmail: string
  createdAt: string
  aiAgentType: string
  metaData?: string
}
