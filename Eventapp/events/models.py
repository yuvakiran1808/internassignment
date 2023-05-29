from django.db import models
from users.models import User
class Event(models.Model):
    event_name = models.CharField(max_length=255)
    data = models.TextField()
    time = models.DateTimeField()
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='event_images/')
    is_liked = models.BooleanField(default=False)
    user_Id = models.IntegerField()

    def __str__(self):
        return self.event_name
    
    def update_user_on_like(self):
           if self.is_liked:
            # Increment the user's like count or perform any desired logic
               is_liked = False
           else:
                is_liked =  True
                