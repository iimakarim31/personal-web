var contactForm = document.getElementById("contactForm")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    submitForm(e);
})

function submitForm(e) {
    var form = e.target;
    var formData = new FormData(form)

    var data = Object.fromEntries(formData.entries())

    console.log(data)

    console.log(data.phoneNumber)

    var link = document.createElement('a');

    link.href=`mailto:iimabdulkarimi56@gmail.com?subject=${data.subject}&body=Selamat siang. Nama saya ${data.name}. Silahkan hubungi saya di ${data.email} atau ${data.phoneNumber}. Skill saya adalah ${data.skill}. Berikut pesan saya : ${data.message}`

    link.click();
}