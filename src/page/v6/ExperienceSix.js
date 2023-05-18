import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TiDelete } from 'react-icons/ti';


const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      // ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};



export default function ExperienceSix() {
  const [item, setItem] = useState(['div'])
  function addNewRow(){
    const current = [...item];
    current.push('newDiv');
    setItem(current)
  }
  function removeRow(){
    const current = [...item];
    current.pop();
    setItem(current)
  }
  return (
    <div>
      <div className='grid grid-cols-2 mt-6 pb-4 '>
        <h1 className='col-span-2 font-bold text-xl label-content mb-2 text-zinc-800'>Experience</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mb-4 gap-x-8 gap-y-6'>

            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`} className='grid grid-cols-7'>
                <div className='col-span-2'>
                  <p className='text-zinc-900 font-bold text-sm label-content flex flex-row' contentEditable="true">Company Name <span> <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='deletebtn  text-zinc-600 hover:text-rose-600 offPrint label-content' /></span></p> 
                  <p className='text-zinc-700 font-light text-sm label-content' contentEditable="true">Role</p>
                  <p className='text-zinc-700 font-light text-sm label-content' contentEditable="true">Month Year - Present</p>
                </div>
                <div className='col-span-5'>
                  {/* <ul>
                    <li className='list-disc text-zinc-700 font-light text-sm label-content' contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</li>
                    <li className='list-disc text-zinc-700 font-light text-sm label-content' contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</li>
                    <li className='list-disc text-zinc-700 font-light text-sm label-content' contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</li>
                  </ul> */}
                  <ReactQuill  modules={modules} theme="snow" placeholder="Type job descriptions"  />
                </div>
              </div>
              )
            } )}

          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Experience</button>
        </div>
      </div>
    </div>
  )
}
