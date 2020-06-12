### Config
Steps to run a postgres instance:
- docker-compose up -d --build (for first time) 
- or docker-compose up -d after first time.
To attach to the container after is running:
docker exec -it postgres-1 psql -U postgres

### Commits
- Short informative messages
- Working on your own branch always
- At least one person to review
- Naming guidelines for branches: `server/feature/name` or `client/bug/description`
- Descptive messages about PRs
- Never check in broken code
- If the commit is large, whoever is reviewing needs to pull

### Testing
- Always test you API routes
- Basic API routes testing
