export default async function handle(req, res) {
    const session = await getSession({ req })
    res.end()

    return session;
}