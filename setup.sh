#!/bin/sh
rm ./.git/hooks/pre-commit
echo "#!/bin/sh
echo \"Linting backend server files\"
cd backend
npm run lint || exit 1
echo \"Done.\nLinting frontend files\"
cd ../frontend
npm run lint || exit 1
echo \"Done\"" >> ./.git/hooks/pre-commit
chmod +x ./.git/hooks/pre-commit