export function getNotesFromStorage() {
  const notes = localStorage.getItem('notes')
  if (notes == null) {
    return []
  }
  return JSON.parse(notes)
}

export function saveNotesToStorage(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}
