const apiURL = 'https://raw.githubusercontent.com/IgorCopa/json-profiles/master/profiles.json';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonProfileInfo) => {
        console.log(jsonProfileInfo);
        const myProfile = jsonProfileInfo.profiles;
        console.log(myProfile);
        const instructor = document.querySelector('.trip-bookings .instructor');
        for(let i=0; i<myProfile.length; i++){
            const instructorBox = document.createElement('div');

            const h3 = document.createElement('h3');
            const h3text = document.createTextNode(myProfile[i].name);
            h3.appendChild(h3text);

            const img = document.createElement('img'); /* new Image(); */
            console.log(img);
            img.setAttribute('src', myProfile[i].picture);
            img.setAttribute('alt', `Instructor ${myProfile[i].name} photo`);
            console.log(myProfile[i].picture);

            const pLevel = document.createElement('p');
            const pLevelText = document.createTextNode(`Certification Level: ${myProfile[i].certification_level}`);
            pLevel.appendChild(pLevelText);

            const pExperience = document.createElement('p');
            const pExperienceText = document.createTextNode(`Years of Experience: ${myProfile[i].years_of_experience}`);
            pExperience.appendChild(pExperienceText);

            const pEmail = document.createElement('p');
            const pEmailText = document.createTextNode(`E-mail Address: ${myProfile[i].email_address}`);
            pEmail.appendChild(pEmailText);

            const pBio = document.createElement('p');
            const pBioText = document.createTextNode(`Biography: ${myProfile[i].biography_sketch}`);
            pBio.appendChild(pBioText);

            instructorBox.appendChild(h3);
            instructorBox.appendChild(img);
            instructorBox.appendChild(pLevel);
            instructorBox.appendChild(pExperience);
            instructorBox.appendChild(pEmail);
            instructorBox.appendChild(pBio);

            instructor.appendChild(instructorBox);


            /* const personImage = document.createElement('img');

            instructorName[i].innerHTML = profiles[i].name; */



        }
    });