# FROM python:3.10-bullseye  1
# RUN python -m pip install --upgrade pip  1
# WORKDIR /app  1

# Copy the top-level files in your service's directory
# Modify these instructions to do that
# COPY requirements.txt requirements.txt  1
# COPY main.py main.py  1

# Copy all of the subdirectories in your service's directory
# Modify these instructions to do that
# COPY queries queries
# COPY routers routers


# If you're using a relational database with migrations,
# uncomment the following line
# COPY migrations migrations

# RUN python -m pip install -r requirements.txt  1
# CMD uvicorn main:app --host 0.0.0.0 --port $PORT
# CMD uvicorn main:app --host 0.0.0.0  1

# If you're using a relational database and want migrations
# to be run automatically, delete the previous CMD line and
# uncomment this CMD line
# CMD python -m migrations up && uvicorn main:app --host 0.0.0.0

# FROM php:7.3-apache  1
# COPY ./ /var/www/html/  1

FROM node:14-alpine
# Uncomment the line above if you want to use a Dockerfile instead of templateId


RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ../ghi/package.json /usr/src/app/
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

CMD [ "npm", "start" ]
