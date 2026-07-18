CREATE TABLE if not exists operators (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    `rank` VARCHAR(100)
);

CREATE TABLE if not exists incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code_name VARCHAR(100),
    threat_level VARCHAR(50),
    status VARCHAR(50),
    operator_id int,
    FOREIGN KEY (operator_id) REFERENCES operators(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create TABLE if not exists logs (
    id int AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(100) NOT NULL,
    incident_id int NOT NULL,
    operator_id int NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (incident_id) REFERENCES incidents(id),
    FOREIGN KEY (operator_id) REFERENCES operators(id)
);