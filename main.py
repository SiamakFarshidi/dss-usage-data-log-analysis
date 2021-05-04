import os
import datetime
from dateutil.parser import parse

def getFeatureRequirements(strFilepath):
    cntReq=0
    OpenFile = open(StrFile, "r")
    Lines = OpenFile.readlines()
    for line in Lines:
        if ("Level=\"Feature\"" in line) and not("Req=\"N\"" in line):
            cntReq=cntReq+1

    return cntReq

def is_date(string, fuzzy=False):
    try:
        parse(string, fuzzy=fuzzy)
        return True

    except ValueError:
        return False

if __name__ == '__main__':
    path = 'Dss-usage-data'
    files = []
    Slash="/"
    dash = "-"
    validDate=""
    # r=root, d=directories, f = files
    for r, d, f in os.walk(path):
        if '/JS' not in r :
            for file in f:
                if '.xml' in file:

                    StrFile=r+Slash+file

                    cntReq=getFeatureRequirements(StrFile)

                    OpenFile = open(StrFile, "r")
                    line1=OpenFile.readline()
                    line2=OpenFile.readline()
                    line2=line2[line2.find("Req=")+5:]
                    strDecisionModel = line2[:line2.find("\"")]

                    if strDecisionModel=="MDDMODEL":
                        strDecisionModel="Model-Driven-Platforms"
                    elif strDecisionModel == "CSPMODEL":
                        strDecisionModel = "Cloud Service Providers"
                    elif strDecisionModel == "BPMODEL":
                        strDecisionModel = "Blockchain Platforms"
                    elif strDecisionModel == "PLMODEL":
                        strDecisionModel = "Programming Languages"
                    elif strDecisionModel=="SWAPMODEL":
                        strDecisionModel="Architecture Patterns"
                    elif strDecisionModel=="DBMSMODEL":
                        strDecisionModel="Database Technologies"
                    elif strDecisionModel=="N":
                        strDecisionModel="New Decision Model"
                    elif strDecisionModel=="DAOMODEL":
                        strDecisionModel="Decentralized Autonomous Organization Platforms"

                    strDate = file[-12:-4]
                    strRegDate=r[-8:]
                    strRegDate=strRegDate[:2]+dash+strRegDate[2:4]+dash+strRegDate[4:8]
                    strDate=strDate[:2]+dash+strDate[2:4]+dash+strDate[4:8]

                    if not(is_date(strRegDate)) and is_date(strDate):
                        strRegDate=strDate

                    if not(is_date(strDate)) and is_date(strRegDate):
                        strDate=strRegDate

                    if is_date(strDate):
                        validDate = strDate
                    if is_date(strRegDate):
                        validDate = strRegDate

                    if not(is_date(strRegDate)) and not(is_date(strDate)):
                        strRegDate=validDate
                        strDate=validDate

                    strYear=strDate[6:]

                    print("%s,%s,%s,%s,%s" % (strYear,strRegDate, strDate, strDecisionModel,cntReq))