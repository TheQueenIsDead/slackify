FROM alpine
RUN apk add --no-cache python
COPY slackify.sh .
RUN chmod +x slackify.sh
ENTRYPOINT ["sh", "slackify.sh"]
