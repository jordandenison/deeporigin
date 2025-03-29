export * from 'denisonweb-utils'

export const copyToClipboard = (text: string): void => {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text)
  } else {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}
