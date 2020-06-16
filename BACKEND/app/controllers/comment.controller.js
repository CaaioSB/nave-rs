const db = require("../models");
const Comment = db.comment;
const Op = db.Sequelize.Op;

// Cria e armazena o comentário
exports.create = (req, res) => {
  // Valida requisição
  if (!req.body.message) {
    res.status(400).send({
      message: "A mensagem não pode ser vazia."
    });
    return;
  }
  else if (!req.body.post_id) {
    req.status(400).send({
      message: "O comentário deve pertencer a uma postagem."
    });
    return;
  }

  // Cria o comentário
  const comment = {
    id: req.body.id,
    message: req.body.message,
    post_id: req.body.post_id,
  };

  // Armazena o comentário no banco de dados
  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu enquanto armazenava o comentário"
      });
    });
};

// Retorna todos os comentários do banco de dados.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Comment.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu enquanto tentava retornar os comentários."
      });
    });
};

// Retorna um determinado comentário obtido pelo ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao retornar o comentário com ID: " + id
      });
    });
};