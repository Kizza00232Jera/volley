export default function ConForm() {
    function Submit(e) {
        const formEle = document.querySelector(".contactForm");
        e.preventDefault();
        console.log('submitted');
        
      
        const formData = new FormData(formEle);

      

        fetch("https://script.google.com/macros/s/AKfycbxO6FW8OQD8QrUvFu7KwTwoLxGwBWZr8LGiviq3QhHBGS1avmGzHn6GDgVxKN5IOkjj/exec", {
            method: "POST",
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            <h2>Contact form</h2>
            <form className="contactForm" onSubmit={(e) => Submit(e)}>
                <input placeholder="Player" name="Player" type="text" />
                <input placeholder="Group" name="Group" type="text" />
                <input placeholder="Set Ratio" name="SetRatio" type="number" />
                <input placeholder="Point Ratio" name="PointRatio" type="number" />
                <input placeholder="Points" name="Points" type="number" />
                <input placeholder="Standings" name="Standings" type="number" />
                <input type="submit" />
            </form>
        </>
    );
}
