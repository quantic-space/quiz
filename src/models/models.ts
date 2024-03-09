import db from "../db"
import * as attr from './modelsAttributes'

// EXAMPLE
// // assuming you have a model named `Task`
// Task.addHook('afterUpdate', (task, options) => {
//     // check if the `status` field has changed
//     if (task.previous('status') !== task.get('status')) {
//       // do something when the `status` field changes
//     }
//   });

// Определение таблиц // 
export const Points_Movement_Register = db.define('points_movement_register', attr.Points_Movement_Register, {
    hooks: {
        // Проверить изменилось ли значение is_deleted
        // И если оно изменилось, то 
        // TO-DO: TEST PROMISE
        async afterUpdate (record, _option) { 
        
            const walletID    = record.dataValues.wallet_ID;
            const pointsDelta = record.dataValues.points_delta;
            const wallet      = await Students_Wallets.findByPk(walletID);
            const prevValue   = await record.previous('is_deleted');
            const curValue    = await record.get('is_deleted');
            const points      = wallet?.getDataValue('points');

            if (prevValue === curValue) return;
Math.abs(1) 
            if (pointsDelta >= 0) await wallet?.update({'points': points - Math.abs(pointsDelta)});
            else await wallet?.update({'points': points + Math.abs(pointsDelta)});
        }
    
    }
})


// =============================================================== //

export const Teachers = db.define('teachers', attr.Teachers)
export const Streams = db.define('streams', attr.Streams)
export const Groups = db.define('groups', attr.Groups)
export const Students = db.define('students', attr.Students)

// =============================================================== //

export const Quizes_Teachers = db.define('quizes_teachers', attr.Quizes_Teachers)
export const Sessions = db.define('sessions', attr.Sessions)
export const Sessions_Students = db.define('sessions_students', attr.Sessions_Students)

// =============================================================== //

export const Application_Settings = db.define('applications_settings', attr.Application_Settings)
export const History = db.define('history', attr.History)
export const Quizes = db.define('quizes', attr.Quizes)
export const Session_Statuses = db.define('session_statuses', attr.Session_Statuses)

// =============================================================== //

export const Quizes_Questions_Containers = db.define('quizes_question_containers', attr.Quizes_Questions_Containers)

// =============================================================== //

export const Questions_Types = db.define('questions_types', attr.Questions_Types)
// =============================================================== //

export const Parts_Insert_Questions_Options = db.define('paired_insert_questions_options', attr.Parts_Insert_Questions_Options)

// =============================================================== //

export const Paired_Answers_Questions_Options_Comparssions = db.define('paired_answers_questions_comparsion', attr.Paired_Answers_Questions_Options_Comparssions)
export const Paired_Answers_Questions_Options = db.define('paired_answers_questions_options', attr.Paired_Answers_Questions_Options)
export const Geo_With_Checking_Questions = db.define('geo_with_checking_questions', attr.Geo_With_Checking_Questions)
export const Sequenced_Questions_Options = db.define('sequenced_questions_options', attr.Sequenced_Questions_Options)
export const Closed_Questions_Options = db.define('closed_questions_options', attr.Closed_Questions_Options)
export const Opened_Questions = db.define('opened_questions', attr.Opened_Questions)
export const Chats_Messages = db.define('chats_messages', attr.Chats_Messages)
export const Chats_Replies = db.define('chats_replies', attr.Chats_Replies)
export const Roles_Types = db.define('roles_types', attr.Roles_Types)
export const Chats_Users =db.define('chats_users', attr.Chats_Users)
export const Chats = db.define('chats', attr.Chats)
export const Users = db.define('users', attr.Users)
export const Subject = db.define('subject', attr.Subject)
export const Groups_Subjects = db.define('groups_subjects', attr.Groups_Subjects)
export const Groups_Teachers = db.define('groups_teachers', attr.Groups_Teachers)
export const Groups_Students = db.define('groups_students', attr.Groups_Students)
export const Students_Wallets = db.define('students_wallets', attr.Students_Wallets)
export const Entering_Attemps = db.define('entering_attemps', attr.Entering_Attempts)
export const Users_Passwords_History = db.define('users_passwords_history', attr.Users_Passwords_History)



// RELATIONS //   
Entering_Attemps.belongsTo(Users, { foreignKey: 'ID'})
Users_Passwords_History.belongsTo(Users, { foreignKey: 'ID'})
Points_Movement_Register.belongsTo(Users, { foreignKey: 'ID'})
Students_Wallets.belongsTo(Users, { foreignKey: 'ID'})
Groups_Students.belongsTo(Users, { foreignKey: 'ID'})
Groups_Teachers.belongsTo(Users, { foreignKey: 'ID'})
Chats_Users.belongsTo(Users, { foreignKey: 'ID'})
Sessions_Students.belongsTo(Users, { foreignKey: 'ID'})
History.belongsTo(Users, { foreignKey: 'ID'})
Quizes_Teachers.belongsTo(Users, { foreignKey: 'ID'})

Students_Wallets.hasOne(Points_Movement_Register, { foreignKey: 'wallet_ID'})
Points_Movement_Register.belongsTo(Students, { foreignKey: 'ID'})








Groups.hasMany(Groups_Students,  { foreignKey: 'group_ID' })
Groups.hasMany(Groups_Teachers, { foreignKey: 'group_ID' })
Groups.hasMany(Groups_Subjects, { foreignKey: 'group_ID' })

Groups_Students.belongsTo(Groups, { foreignKey: 'ID'})
Groups_Teachers.belongsTo(Groups, { foreignKey: 'ID'})
Groups_Subjects.belongsTo(Groups, { foreignKey: 'ID'})



Subject.hasMany(Groups_Subjects, { foreignKey: 'subjects_ID' })
Subject.hasMany(Quizes, { foreignKey: 'subject_ID' })

Groups_Subjects.belongsTo(Subject, { foreignKey: 'ID' })
Quizes.belongsTo(Subject, { foreignKey: 'ID' })

Chats.hasMany(Chats_Messages, { foreignKey: 'chat_ID' })


Users.hasMany(Entering_Attemps, { foreignKey: 'user_ID'})
Users.hasMany(Users_Passwords_History, { foreignKey: 'user_ID' })
Users.hasMany(Points_Movement_Register, { foreignKey: 'sender_user_ID' })
Users.hasMany(Students_Wallets, { foreignKey: 'student_ID' })
Users.hasMany(Groups_Students, { foreignKey: 'student_ID' })
Users.hasMany(Groups_Teachers, { foreignKey: 'teacher_ID' })
Users.hasMany(Chats_Messages, { foreignKey: 'user_ID' })
Users.hasMany(Chats_Users, { foreignKey: 'user_ID' })
Users.hasMany(Sessions_Students, { foreignKey: 'student_ID' })
Users.hasMany(History, { foreignKey: 'user_ID' })
Users.hasMany(Quizes_Teachers, { foreignKey: 'author_ID' })

Sessions.hasMany(Sessions_Students, { foreignKey: 'session_ID' })
Sessions_Students.belongsTo(Sessions, { foreignKey: 'ID'})

History.belongsTo(Users, { foreignKey: 'ID'})

Quizes.hasMany(Quizes_Teachers, { foreignKey: 'quiz_ID' })
Quizes.hasMany(Sessions, { foreignKey: 'quiz_ID' })
Quizes_Teachers.belongsTo(Quizes, { foreignKey: 'ID' })
Sessions.belongsTo(Quizes, { foreignKey: 'ID' })

Session_Statuses.hasMany(Sessions, { foreignKey: 'status_ID' })
Sessions.belongsTo(Session_Statuses, { foreignKey: 'ID' })

Chats_Users.belongsTo(Chats, { foreignKey: 'ID' })
Chats_Messages.belongsTo(Chats, { foreignKey: 'ID' })


Chats_Users. hasMany(Chats_Replies, { foreignKey: 'message_ID'})

Roles_Types.hasMany(Users, { foreignKey: 'ID' })
Users.belongsTo(Roles_Types, { foreignKey: 'ID' })


Quizes.hasMany(Quizes_Questions_Containers, { foreignKey: 'ID'})
Quizes_Questions_Containers.belongsTo(Quizes, { foreignKey: 'ID' })

Questions_Types.hasMany(Quizes_Questions_Containers, { foreignKey: 'quesion_ID' })

Quizes_Questions_Containers.hasMany(Closed_Questions_Options, { foreignKey: 'ID' })
Quizes_Questions_Containers.hasMany(Sequenced_Questions_Options, { foreignKey: 'ID' })
Quizes_Questions_Containers.hasMany(Paired_Answers_Questions_Options, { foreignKey: 'ID' })
Quizes_Questions_Containers.hasMany(Parts_Insert_Questions_Options, { foreignKey: 'ID' })
Quizes_Questions_Containers.hasMany(Geo_With_Checking_Questions, { foreignKey: 'ID' })
Quizes_Questions_Containers.hasMany(Opened_Questions, { foreignKey: 'ID' })

Closed_Questions_Options.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })
Sequenced_Questions_Options.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })
Paired_Answers_Questions_Options.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })
Parts_Insert_Questions_Options.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })
Geo_With_Checking_Questions.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })
Opened_Questions.belongsTo(Quizes_Questions_Containers, { foreignKey: 'ID' })


Paired_Answers_Questions_Options.hasMany(Paired_Answers_Questions_Options_Comparssions, { foreignKey: 'left_side_ID' })
Paired_Answers_Questions_Options.hasMany(Paired_Answers_Questions_Options_Comparssions, { foreignKey: 'right_side_ID' })

Paired_Answers_Questions_Options_Comparssions.belongsTo(Paired_Answers_Questions_Options, { foreignKey: 'ID' })

