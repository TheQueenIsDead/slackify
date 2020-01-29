#!/bin/sh
MSG=$1
python -c "import os; print(\"\".join( \":{}:\".format(x) if x.isalpha() else (x*3 if x == \" \" else x) for x in \"$MSG\"))"
