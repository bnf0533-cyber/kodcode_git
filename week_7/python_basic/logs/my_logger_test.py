import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.info)

file_handler = logging.FileHandler(
    'application.log')
formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(name)s | %(message)s')
file_handler.setFormatter(formatter)
logging.addHandler(file_handler)

def process_order(order_id):
    logging.info('Order started: %s', order_id)
    logger.info('Order finished: %s', order_id)



logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(name)s | %(message)s | %(lineno)d')

steam_handler = logging.StreamHandler()
steam_handler.setFormatter(formatter)

file_handler = logging.FileHandler("log.log",encoding="utf-8")
logger.addHandler(steam_handler)
logger.addHandler(file_handler)
logger.info("appllication started", extra={"Name":"Momo"})
logger.warning("Low Disk space")
logger.error("Battery is off")