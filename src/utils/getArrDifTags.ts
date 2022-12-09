import { Tag } from '../store/tagSlice'
import { Note } from '../store/noteSlice'

export const getArrDiffTags = (arrNotes: Note[], arrTags: Tag[]): Tag[] => {
    // console.log('notes from tagList', notes);
    let arrTagsFromNotes = arrNotes.map(item => {
        if (item.tag !== '') return item.tag.slice(1)
        return ''
      }).filter(el => el.length > 0).sort()
      // console.log('arrTagsFromNotes', arrTagsFromNotes);
      // console.log('tags from tagList', tags);
      let arrTagsFromTags = arrTags.map(item => {
          if (item.text !== '') return item.text
          return ''
        }).filter(el => el.length > 0).sort()
      // console.log('arrTagsFromTags', arrTagsFromTags);
      let difArr = arrTagsFromNotes.filter( (el) => arrTagsFromTags.indexOf(el) < 0 )
      // console.log('result', result);
      let newArr = difArr.map((_, ind, arr) => {
          return {
              id: new Date().toISOString(),
              text: arr[ind]
          }
      })
      return newArr
}
