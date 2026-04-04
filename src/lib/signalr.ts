import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

let connection: HubConnection | null = null;

export function getOddsConnection() {
  if (!connection) {
    connection = new HubConnectionBuilder()
      .withUrl(`${process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:5000'}/hubs/odds`)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();
  }
  return connection;
}
