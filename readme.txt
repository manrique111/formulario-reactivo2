for run proyect in docker please use following commands

Before you must have docker installed

Imagen compilation
docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .

example:   docker build -t node16:v1 .

for run proyect in a terminal

docker run -it --name formulario \
  -p 80:4200 \
  -v "${PWD}/app:/opt/app" \
  node16:v1


delete imagen
docker rm -f datatable