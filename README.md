# Meu Projeto

## Objetivo
Este projeto tem como objetivo meu aprendizado com novas tecnologias, como **Bootstrap**, **jQuery**, entre outras.
-



## Tecnologias utilizadas
### Front-End
- **Bootstrap**:
- **jQuery**: 

### Back-End
- **Node.js**: 
- **MySQL**: Como banco de dados relacional.


---

## Estrutura do Banco de Dados

### Tabelas
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE conteudo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    html TEXT NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE menu_conteudo_lateral (
    id INT AUTO_INCREMENT PRIMARY KEY,
    json_menu JSON NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

### Alter Tables 
ALTER TABLE usuarios
ADD COLUMN senha VARCHAR(255) NOT NULL;

ALTER TABLE usuarios
ADD COLUMN email VARCHAR(255) NOT NULL;
