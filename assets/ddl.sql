DROP TABLE IF EXISTS subscription_form;
CREATE TABLE subscription_form (
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(50) NOT NULL,
    author_profile_url VARCHAR(1000) DEFAULT NULL,
    color_hex varchar(11) NOT NULL,
    content varchar(2000),
    webhook_url varchar(1000) NOT NULL,
    to_get_account_id varchar(100) NOT NULL,
    last_checked_tweet_id varchar(100) DEFAULT NULL,
    last_checked_time DATETIME DEFAULT NULL,
    created_at DATETIME NOT NULL DEFAULT now()
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;