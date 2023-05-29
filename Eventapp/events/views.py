from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer
from rest_framework import generics

# API view for creating an event

class create_event(APIView):
    def post(self, request):
            serializer = EventSerializer(data=request.data)
            if serializer.is_valid():
               serializer.save()
               return Response(serializer.data)
            return Response(serializer.errors)

# API view for liking/unliking an event

class Like_event(APIView):
     def post(self, request, event_id):
              try:
                 event = Event.objects.get(id=event_id)
              except Event.DoesNotExist:
                 return Response(status=404)

              event.is_liked = not event.is_liked
              event.save()

              event.update_user_on_like()

              serializer = EventSerializer(event)
              return Response(serializer.data)

# API view for retrieving a list of events
class EventListAPIView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

            

