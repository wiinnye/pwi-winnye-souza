echo OFF
echo --- Retirarando  Usuario github ----

 git config --global --unset-all user.mail
 git config --global --unset-all user.name

echo --- Configurando Usuario GitHUB ----

git config --global user.name "Winnye Souza"
git config --global user.email "wiinnye@gmail.com"
echo --- Mostrando a configuração atual do GitHub no computador
git config --list
echo
echo --- Fim ---
echo

pause