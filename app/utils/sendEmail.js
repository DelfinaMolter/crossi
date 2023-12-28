
export const sendEmail= async(data)=>{
    const res = await fetch('/api/send', { method: 'POST', body: JSON.stringify(data)})
    const info = await res.json()
    return info
}
