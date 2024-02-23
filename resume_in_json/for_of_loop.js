const resumeData = {
    
    "name": "KISHORKUMAR K",
    "contact_info": {
      "email": "123456789@gmail.com",
      "phone": "+91 111111111",
      "address": "456 Elm St, Townsville, State, Zip"
    },
    "summary": "Motivated and dedicated student pursuing a Bachelor's degree in Computer Science. Eager to gain hands-on experience and apply classroom knowledge in real-world settings. Strong problem-solving skills and a passion for learning new technologies.",
    "education": {
      "degree": "Bachelor of Technology in Computer Science and Engineering (Expected)",
      "school": "State University",
      "location": "Townsville, State",
      "dates": "2020-2024"
    },
    
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Git",
      "Problem Solving",
      "Teamwork",
      "Communication"
    ]
  }
  
  
// Using for...of loop with a different variable name
function iterateResumeData(data, prefix = '') {
    for (let [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(prefix + key + ": ");
        iterateResumeData(value, prefix + "\t");
      } else if (Array.isArray(value)) {
        console.log(prefix + key + ": ");
        for (let item of value) {
          if (typeof item === 'object') {
            iterateResumeData(item, prefix + "\t");
          } else {
            console.log(prefix + "\t" + item);
          }
        }
      } else {
        console.log(prefix + key + ": " + value);
      }
    }
  }
  
  iterateResumeData(resumeData);
  
  
  

  