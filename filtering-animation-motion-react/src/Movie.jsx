import { motion } from 'framer-motion';

function Movie({ data }) {
    return (
        <motion.div
            layout='position'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2>{data.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path} alt={data.title} />
        </motion.div>
    );
}

export default Movie;