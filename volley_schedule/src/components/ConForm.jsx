export default function ConForm() {
    function Submit(e){
        const formEle = document.querySelector(".contactForm")
        e.preventDefault()
        console.log('submited')
        const formData = new FormData(formEle)
        fetch("",{
            method: "POST",
            body: formData
        })
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