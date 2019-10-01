FROM alpine:3.9
RUN apk add docker \
    && apk add py-pip \
    && apk add python-dev libffi-dev openssl-dev gcc libc-dev make \
    && pip install docker-compose \
    && rm -rf /var/cache/apk/*
RUN mkdir main
WORKDIR /main
COPY . /main
RUN cd main && docker-compose up