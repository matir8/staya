# Generated by Django 2.1.3 on 2018-11-03 15:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0007_auto_20181103_1301'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='name',
            new_name='title',
        ),
    ]
