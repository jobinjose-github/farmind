# Use an official Python runtime as a parent image
FROM python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /code

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        gettext \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy project files into the working directory
COPY . /code/

# Expose port 8000 to allow communication to/from server
EXPOSE 8000

# Run migrations and collect static files (if applicable)
# Adjust this based on your Django project's needs
# RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput

# Specify the command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
