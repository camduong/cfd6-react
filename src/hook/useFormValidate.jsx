import { useState } from "react";

// "i" ở cuối mỗi dòng để khỏi phân biệt viết hoa hay viết thường
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    urlPattern = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/i

export default function useFormValidate(initialForm, validate) {
  let [form, setForm] = useState(initialForm)
  let [error, setError] = useState({})
  function inputChange(e) {
    let name = e.target.name
    let value = e.target.value

    setForm({
      ...form,
      [name]: value
    })
  }
  function check() {
    let errorObj = {}
    let { rule, message } = validate

    for (let i in rule) {
      let r = rule[i]
      let m = message[i] || {}
      if (r.required && !form[i]?.trim()) {
        errorObj[i] = m.required || 'Trường này không đc để trống'
      }
      if (r.pattern && form[i]) {
        // let pattern = r.pattern
        let { pattern } = r
        if (pattern === 'email') pattern = emailPattern
        if (pattern === 'phone') pattern = phonePattern
        if (pattern === 'url') pattern = urlPattern
        if (!pattern?.test(form[i])) {
          errorObj[i] = m.pattern || 'Trường này không đúng định dạng'
        }
      }
    }

    setError(errorObj)
    return errorObj
  }
  return {
    form,
    error,
    inputChange,
    check
  }
}