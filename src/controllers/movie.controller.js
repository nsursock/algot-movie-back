// const MovieModel = require("../models/movie.model");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createRequest = async (req, res) => {
  try {
    const movie = req.body.movie;
    const data = {
      name: movie.Name,
      genre: movie.Genre,
      descr: movie.Description,
      director: movie.Director,
      actors: movie.Actors,
      year: movie.Year,
      runtime: Number(movie["Runtime (Minutes)"]),
      rating: Number(movie.Rating),
      votes: Number(movie.Votes),
      revenue: Number(movie["Revenue (Millions)"]),
      score: Number(movie.Metascore),
    };
    const result = await prisma.movie.create({ data });
    res.status(201).json({ message: "Movie correctly added!" });
  } catch (e) {
    console.log("Error", e.message);
    res.status(400).json({ message: e.message });
  }
};

exports.readRequest = async (req, res) => {
  const numParams = Object.keys(req.query).length;
  const numFilters =
    numParams !== 0 &&
    (!Array.isArray(req.query.field) ? 1 : req.query.field.length);

  const whereClause =
    numParams > 0
      ? numFilters === 1
        ? {
            [req.query.field]: {
              contains: req.query.value,
            },
          }
        : {
            AND: req.query.field.map((field, i) => {
              return {
                [field]: {
                  contains: req.query.value[i],
                },
              };
            }),
          }
      : null;

  try {
    const query = {
      ...(numParams !== 0 && {
        where: whereClause,
      }),
      ...({} && {
        orderBy: {
          rating: "desc",
        },
      }),
    };
    const movies = await prisma.movie.findMany(query);
    res.status(200).json(movies);
  } catch (e) {
    console.log("Error", e.message);
    res.status(400).json({ message: e.message });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await prisma.movie.deleteMany({});
    res.status(202).json({ message: "Table deleted!" });
  } catch (e) {
    console.log("Error", e.message);
    res.status(400).json({ message: e.message });
  }
};
