const fnWithError = () => {
  throw new Error("some error");
};
try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}
// при нахождении ошибки в try/catch способе, код не останавлвается при ошибке
