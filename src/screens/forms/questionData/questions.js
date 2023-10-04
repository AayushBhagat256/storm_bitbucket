export const questionaire = {
    "survey_title": "Employee Feedback and Engagement Survey",
    "introduction": "Thank you for taking the time to share your feedback. Your input is valuable in helping us improve the workplace and enhance employee engagement. Your responses will remain anonymous.",
    "sections": [
      {
        "title": "General Information",
        "questions": [
          {
            "question": "Name (Optional):",
            "type": "text"
          },
          {
            "question": "Department/Team:",
            "type": "text"
          },
          {
            "question": "How long have you been with the company?",
            "type": "multiple_choice",
            "choices": [
              "Less than 6 months",
              "6 months to 1 year",
              "1-3 years",
              "3-5 years",
              "More than 5 years"
            ]
          }
        ]
      },
      {
        "title": "Workplace Satisfaction",
        "questions": [
          {
            "question": "On a scale of 1 to 5, how satisfied are you with your overall work experience at [Company Name], where 1 is very dissatisfied and 5 is very satisfied?",
            "type": "multiple_choice",
            "choices": ["1", "2", "3", "4", "5"]
          },
          {
            "question": "What do you like most about your work environment at [Company Name]?",
            "type": "text"
          },
          {
            "question": "What areas do you think need improvement in the workplace?",
            "type": "text"
          }
        ]
      },
      {
        "title": "Employee Feedback and Engagement Platform",
        "questions": [
          {
            "question": "Are you aware of the Employee Feedback and Engagement Platform provided by [Company Name]?",
            "type": "multiple_choice",
            "choices": ["Yes", "No"]
          },
          {
            "question": "How often do you use the platform to provide feedback or engage with your colleagues and management?",
            "type": "multiple_choice",
            "choices": ["Daily", "Weekly", "Monthly", "Rarely", "Never used"]
          },
          {
            "question": "Please rate the user-friendliness of the platform on a scale of 1 to 5, with 1 being very difficult to use and 5 being very user-friendly.",
            "type": "multiple_choice",
            "choices": ["1", "2", "3", "4", "5"]
          },
          {
            "question": "Have you ever submitted feedback anonymously through the platform?",
            "type": "multiple_choice",
            "choices": ["Yes", "No"]
          }
        ]
      },
      {
        "title": "Employee Engagement",
        "questions": [
          {
            "question": "On a scale of 1 to 5, how engaged do you feel in your current role at [Company Name], where 1 is not engaged at all and 5 is highly engaged?",
            "type": "multiple_choice",
            "choices": ["1", "2", "3", "4", "5"]
          },
          {
            "question": "What factors contribute the most to your level of engagement in your role?",
            "type": "text"
          },
          {
            "question": "Are there any specific initiatives or activities you would like to see implemented to enhance employee engagement?",
            "type": "text"
          }
        ]
      },
      {
        "title": "Recognition and Rewards",
        "questions": [
          {
            "question": "Have you received any recognition or rewards through the Employee Feedback and Engagement Platform?",
            "type": "multiple_choice",
            "choices": ["Yes", "No"]
          },
          {
            "question": "Please describe the recognition or rewards you received and how they impacted your motivation or satisfaction.",
            "type": "text"
          }
        ]
      },
      {
        "title": "Additional Comments",
        "questions": [
          {
            "question": "Do you have any additional comments, suggestions, or feedback that you would like to share with us regarding employee feedback and engagement at [Company Name]?",
            "type": "text"
          }
        ]
      }
    ]
  }
  