/*
Language: Dockerfile 
Author: Ken Cochrane <kencochrane@gmail.com>
*/

function(hljs) {
  return {
    keywords:
      'FROM MAINTAINER RUN CMD EXPOSE ENV ADD ENTRYPOINT VOLUME USER WORKDIR', 
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
}
