import { DataTypes, ModelAttributes } from "sequelize";


export const Chat_Replies: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    message_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    message_reply_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Chat_Users: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    chat_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    message_text: {
        type: DataTypes.CHAR(500),
        allowNull: true
    },

    invite_link: {
        type: DataTypes.CHAR(300),
        allowNull: true
    },

    is_administrator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}


export const Chats: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    invite_link: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    theme_name: {
        type: DataTypes.CHAR(50),
        allowNull: true
    },

    is_group_chat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Chats_Messages: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    chat_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    message_text: {
        type: DataTypes.CHAR(500),
        allowNull: true
    },
    file: {
        type: DataTypes.CHAR(500),
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Chats_Users: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    chat_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.CHAR(100),
        allowNull: true
    },

    invite_link: {
        type: DataTypes.CHAR(300),
        allowNull: true
    },

    is_administrator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Chats_Replies: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    message_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    message_reply_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}
export const Roles_Types: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Users: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    role_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    login: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    salt: {
        type: DataTypes.BLOB('tiny'),
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    logo_URL: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Entering_Attempts: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    entering_datetime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },

    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Users_Passwords_History: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    value: {
        type: DataTypes.BLOB('tiny'),
        allowNull: false,
    },

    adding_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Points_Movement_Register: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    wallet_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    points_date_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    points_delta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Teachers: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    surname: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    patronymic: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Streams: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    group_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    year: {
        type: DataTypes.TIME,
        allowNull: false
    },

    description: {
        type: DataTypes.CHAR(200),
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Groups: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: DataTypes.CHAR(20),
        allowNull: false,
        unique: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Students: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    surname: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    patronymic: {
        type: DataTypes.CHAR(50),
        allowNull: true,
    },

    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Subject: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}

export const Quizes_Teachers: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quiz_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    author_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Sessions: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quiz_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    date_time_start: {
        type: DataTypes.DATE,
        allowNull: false
    },

    reserve_time: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            min: 0
        }
    },

    session_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 0
        }
    },

    is_reexam: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_bought: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}


export const Groups_Teachers: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    teacher_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    group_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Students_Wallets: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    student_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

export const Groups_Subjects: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    subjects_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    group_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

export const Groups_Students: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    students_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    group_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

export const Sessions_Students: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    session_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    student_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    main_points: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    additional_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    is_bought: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Application_Settings: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true
    },

    value: {
        type: DataTypes.CHAR(100),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const History: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    user_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },

    table_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    column_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    row_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    old_value: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    new_value: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    edit_date_time: {
        type: DataTypes.DATE,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Quizes: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    subject_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },

    description: {
        type: DataTypes.CHAR(200),
        allowNull: true
    },

    summary_time: {
        type: DataTypes.TIME,
        allowNull: false
    },

    max_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },

    max_add_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Session_Statuses: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    status: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Quizes_Questions_Containers: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    quiz_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    question_type_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    question_text: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },

    picture_URI: {
        type: DataTypes.CHAR(200),
        allowNull: true
    },

    is_additional: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }

}

export const Questions_Types: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    schema_table_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.CHAR(30),
        allowNull: false,
        unique: true
    },

    durability: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}



export const Closed_Questions_Options: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    question_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    option_text: {
        type: DataTypes.CHAR(100),
        allowNull: false
    },

    is_correct_option: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Sequenced_Questions_Options: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    question_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    option_text: {
        type: DataTypes.CHAR(30),
        allowNull: false,
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Paired_Answers_Questions_Options: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    question_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    option_text: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}

export const Paired_Answers_Questions_Options_Comparssions: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    left_side_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    right_side_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }

}

export const Parts_Insert_Questions_Options: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    question_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    part_text: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },

    is_hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Geo_With_Checking_Questions: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    question_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    langitude: {
        type: DataTypes.CHAR(20),
        allowNull: false
    },

    lantitude: {
        type: DataTypes.CHAR(20),
        allowNull: false
    },

    is_place_visited: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    check_q_text: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },

    check_q_answer: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

export const Opened_Questions: ModelAttributes = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    quesion_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    answer_text: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },

    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}