# Generated by Django 2.1.3 on 2018-11-04 10:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0012_auto_20181104_1033'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listingimage',
            name='image_url',
        ),
    ]
