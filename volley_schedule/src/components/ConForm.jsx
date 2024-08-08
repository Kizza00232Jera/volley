

export default function ConForm() {
    function Submit(e){
        const formEle = document.querySelector(".contactForm")
        e.preventDefault()
        console.log('submited')
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbxKX1_v7vGPpNBALfDxLr71TSfuj_lOsFCvWJQo6S9gSLxxFwL6PSCR22M9_SuMwFmp/exec",{
            method: "POST",
            body: formData
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
        }).catch((error)=>console.log(error))
    }
    return (
        <>
            <h2>Contact form</h2>
            <form className="contactForm" onSubmit={(e)=>Submit(e)}>
            <input placeholder="Name" name="Name" type="text" />
            <input placeholder="Email" name="Email" type="email" />
            <input placeholder="Message" name="Message" type="text" />
            <input type="submit" />
            </form>
        </>
    )
}